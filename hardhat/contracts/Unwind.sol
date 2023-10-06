// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Unwind {
    // ------ Store
    Post[] public all_posts;
    mapping (bytes32 => Post) posts;
    mapping (string => Comments) comments;

    // ------ Data Types
    struct User {
        string id;
        address _address;
        string name;
        Post posts;
    }

    struct Post {
       uint256 id;
        address author;
        string content;
        address post_owner;
        address[] up_voters;
        address[] down_voters;
        Comments[] comments;
    }

    struct Comments {
        string id;
        string post_id;
        string note;
    }



    // ------- Up/DownVote

     function upvote_post(address user_address, bytes32 post_id ) public  returns (bytes32 memory) {
        Post memory p = posts[post_id];
       p.up_voters[user_address];

    }

    // function downvote_post()  returns (Post[]) {
    //     returns all_posts;
    // }

    // function getAllPost()  returns (Post[]) {
    //     returns all_posts;
    // }

    // --------- Comment

    // function get_commentsForPost(uint post_id,) public view  returns  () {    
    // }

    // function create_comment(uint post_id, uint user_id, string _comment) public  returns () {    
    // }
    

    // --------- Post
    // function createPost() public returns () {    
        // create
        // add to all_posts
        // return post
    // }

    // function get_post(uint id) public view returns () {    
    // }

    // function get_user_posts(uint user_id) public view  returns () {    
    // }


    // -------- User

    // function create_user()  returns () {
    // }

    // function get_user()  returns () {
    // }
    
    // function delete_user()  returns () {
        
    // }

    // ------ Random

       uint256 private postCount;
    mapping(uint256 => Post) private posts;

      function getTweet(uint256 _id) public view returns (uint256, address, string memory) {  
            require(_id > 0 && _id <= postCount, "Invalid tweet ID");
            Post memory _posts = posts[_id];
            return (_posts.id, _posts.author, _posts.content);
        }
}