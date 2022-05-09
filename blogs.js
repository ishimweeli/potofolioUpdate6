
const containerComponents = document.getElementsByClassName('container');
const displayData = async () => {
    const articles = await fetch('https://fast-garden-04062.herokuapp.com/articles')
    const data = await articles.json()
    let ui = ''
    data.map(article => {
        ui += `<div class="box">
        <div class="image">
           <img src="pic me1.jpg">
          </div>
          <div class="name_job">${article.title}</div>
          
          <p>
          ${article.articleBody}</p>
          </p>
          <div class="likes">
          <button class="btn btn-like" id="like">
    <span class="btn-icon btn--icon-default">
        <span class="fa fa-heart"></span>
    </span>
    <span class="btn-icon btn--icon-liked">
        <span class="fa fa-heart"></span>
    </span>
    <span class="btn-content  btn-content--liked">
        Liked
    </span>
    <span class="btn-content btn-content--default">
        Like
    </span>
</button>

<section id="app">
    <div class="container_comments">
      <div class="row">
        <div class="col-6">
          <div class="comment">
        <p v-for="items in item" v-text="items"></p>
          </div><!--End Comment-->
          </div><!--End col -->
          </div><!-- End row -->
      <div class="row">
        <div class="col-6">
      <textarea type="text" class="input" placeholder="Write a comment" v-model="newItem" @keyup.enter="addItem()"></textarea>
          <button v-on:click="addItem()" class='primaryContained float-right' type="submit">Add Comment</button>
        </div><!-- End col -->
      </div><!--End Row -->
    </div><!--End Container -->
  </section><!-- end App -->
  </div>
          <div class="btns">
            <button>Read More</button>
            </div>
        </div>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML = ui
    console.log(data)
}
displayData(articles = function (str, length, ending) {
    if (length == null) {
        length = 20;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
})
article()

