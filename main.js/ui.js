export const clearMovies = () => {
  const list = document.getElementById(`search-results`);
 
  while (list.firstChild) {
      list.firstChild.remove();
  }
};
const createListItem = (title, year, poster) => {
  const catpion = `${year}, ${title}`;
  const captionNode = document.createElement('figcaption');
  captionNode.appendChild(documet.createTextNode(caption));
  const posterNode = document.createElement(`img`);
  posterNode.setAttribute(`alt`, catpion);
  posterNode.setAttribute(`class`, `search-results-item-poster`);
  posterNode.setAttribute(`src`, poster);

  const figureNode = document.createElement(`figure`);
  figureNode.appendChild(posterNode);
  figureNode.appendChild(captionNode);

  const listItemNode = document.createElement(`li`);
  listItemNode.setAttribute(`class`, `search-results-item`);
  listItemNode.appendChild(figureNode);

  return listItemNode;
};

export const appendMovies = (movies) => {
  const list = document.getElementById('search-results');
  movies.forEach((movie) => {
      const listItemNode = createListItem(movie.Title, movie.Year, movie.Poster);
      list.appendChild(listItemNode);
  });
};



