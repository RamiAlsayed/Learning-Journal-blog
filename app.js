const viewMore = document.querySelector('.view-more');
const articalGrid = document.querySelector('.artical-grid2')

const blog = `

   
      <div class="blog1">
        <img src="/images/blog-image-06.png" alt="laptop" />
        <p>JULY 23,2022</p>
        <h2><a  href="#">Blog seven</a></h2>
        <p class="p-blog">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi sit amet laoreet est.
          Integer vel neque vel dui tincidunt finibus.
        </p>
      </div>
      <div class="blog">
        <img src="/images/blog-image-04.png" alt="laptop" />
        <p>JULY 23,2022</p>
        <h2><a href="#">Blog eight</a></h2>
        <p class="p-blog">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi sit amet laoreet est.
           Integer vel neque vel dui tincidunt finibus.
        </p>
      </div>
      <div class="blog">
        <img src="/images/blog-image-05.png" alt="laptop" />
        <p>JULY 23,2022</p>
        <h2><a href="#">Blog nine</a></h2>
        <p class="p-blog">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi sit amet laoreet est. 
          Integer vel neque vel dui tincidunt finibus.
        </p>
      </div>
     
 `

  

viewMore.addEventListener('click', ()=>{
   articalGrid.innerHTML = blog
   viewMore.style.display = "none";
})

