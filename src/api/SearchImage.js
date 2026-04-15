const API_KEY = "53251288-0c39733b1864ffef8bb63504c";
export default function searchImage(searchQuery, page) {
  return fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`).then((res)=> res.json());
}

