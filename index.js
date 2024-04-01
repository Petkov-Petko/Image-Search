const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#formInput");
const photos = document.querySelector(".photos");
const showMore = document.querySelector("#showMore");

const key = "ZB_0hnsspxVAJqysauoOHuUkXe5oyo56St96zuylpHs";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

    if(page === 1) {
        photos.innerHTML = "";
    }

  results.map((el) => {
    const image = document.createElement("img");
    image.src = el.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = el.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    photos.appendChild(imageLink);
  });
  showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
searchForm.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  page++;
  searchImages()
});
