const comments = document.querySelector('#commentSection');
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  const commentCard = createComment(name.value, comment.value);
  comments.innerHTML+= commentCard;
  form.reset()
 
});

function createComment(name, comment){
  return `
    <div class="d-flex flex-row p-3">
    <div class="w-100">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-row align-items-center">
                <span class="mr-2 text-capitalize">${name}</span>                     
            </div>
            <small>${new Date().toUTCString().slice(5, 16)} Now</small>
        </div>
        <p class="text-justify comment-text mb-0">${comment}</p>
    </div>
    </div>
 `
}