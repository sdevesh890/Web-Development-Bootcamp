const btn = document.querySelector('button');
const userName = document.querySelector('#username');
const tweet = document.querySelector('#tweet');
const formTweet = document.querySelector('#tweetForm');
const list = document.querySelector('#list');

formTweet.addEventListener('submit',function(e)
{
    e.preventDefault();
    addTweet(userName,tweet);
    userName.value = '';
    tweet.value = '';
})

const addTweet=(userName,tweet)=>
{
    const li = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(userName.value);
    li.append(bTag);
    li.append(`- ${tweet.value}`);
    list.append(li);
}

list.addEventListener('click',function(e)
{
    e.target.nodeName==='LI' && e.target.remove();
})