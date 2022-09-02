const newDiscussionName = document.getElementById('newDiscussionName');
const newDiscussionPost = document.getElementById('newDiscussionPost');



const createPost = () => {
    const newDiscussionNameCreate = newDiscussionName.value;
    const newDiscussionPostCreate = newDiscussionPost.value;

    var mainContainer = document.getElementById("myPost");
    var article = document.createElement("article");
                article.innerHTML = article.innerHTML + 
                `<div>
                <h2>${newDiscussionNameCreate}</h2>
                <p>${newDiscussionPostCreate}</p>
                </div>`;
    mainContainer.appendChild(article);
};