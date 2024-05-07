// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
contract AGZeus is ERC721, ReentrancyGuard {

    string private _baseuri;
    uint256 private _totalsupply;
    address private _owner;
    uint256 private _price;
    uint256 private _ref_precent;
    // Mapping from token ID to owner address 
    mapping(uint256 => address) private _owners;

    constructor(address owner, string memory baseURI_, uint256 ref_precent_) ERC721("auralgenius.com", "AGZ") {
        require(owner != address(0));
        _baseuri = baseURI_;
        _ref_precent = ref_precent_;
        _owner = owner;
        _price = 10000000000000;//0.001 E
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, 'Not owner'); 
        _;
    } 
   
    function withdraw(address payable to) public onlyOwner {
        require(msg.sender != address(0));
        uint amount = address(this).balance;

        (bool success, ) = to.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function safeAdd(uint256 a, uint256 b) internal pure returns(uint256){
        (bool success, uint256 res) = SafeMath.tryAdd(a, b);
        require(success, "Addition error");
        return res;
    }

    function safeMul(uint256 a, uint256 b) internal pure returns(uint256){
        (bool success, uint256 res) = SafeMath.tryMul(a, b);
        require(success, "Multiplication error");
        return res;
    }

    function safeDiv(uint256 a, uint256 b) internal pure returns(uint256){
        (bool success, uint256 res) = SafeMath.tryDiv(a, b);
        require(success, "Division error");
        return res;
    }

    function safeMint(address payable ref) public payable nonReentrant{
        require(ref != address(0), "NULL address");
        require(msg.sender != address(0), "NULL address");
        require(msg.value == _price, "invalid valie");
        address to = msg.sender;
        uint256 tokenId = safeAdd(_totalsupply, 1);
        _safeMint(to, tokenId);
        _totalsupply = tokenId;
        _owners[tokenId] = to;
        uint256 to_ref = safeMul(safeDiv(_price, 100), _ref_precent);
        (bool success, ) = ref.call{value: to_ref}("");
        require(success, "Failed to send Ether");
    }
    
    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseuri;
    }

    function setPrice(uint256 newPrice) public onlyOwner {
        require(newPrice != 0);
        _price = newPrice;
    }

    function getPrice() public view returns (uint256) {
        return _price;
    }

    function setRefPercent(uint256 newPercent) public onlyOwner{
        require(newPercent < 100);
        require(newPercent > 0);
        _ref_precent = newPercent;
    }
    
    function getRefPercent() public view returns (uint256) {
        return _ref_precent;
    }

    /**
     * @dev Returns whether `tokenId` exists.
     *
     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.
     *
     * Tokens start existing when they are minted (`_mint`),
     * and stop existing when they are burned (`_burn`).
     */
    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return _owners[tokenId] != address(0);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return baseURI;
    }
    
    function totalSupply() public view returns (uint256){
        return _totalsupply;
    }
}