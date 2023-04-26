const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const portionQuantity = document.querySelector('.portion-quantity');
const list = document.getElementsByClassName("ingredient-quantity");
const reviewSubmitButton = document.querySelector(".review-submit-button");
const reviewName = document.querySelector(".review-name");
const reviewText = document.querySelector(".review-text");
const reviewList = document.querySelector(".review-list");

function handleMinusButton(){
    for (i = 0; i < list.length; i++) {

        const result = list[i].textContent * (portionQuantity.textContent-1)/portionQuantity.textContent;
        list[i].textContent = result;
      }

      portionQuantity.textContent = portionQuantity.textContent-1;
}
minusButton.addEventListener('click', handleMinusButton)

function handlePlusButton(){
  let quantity = parseInt(portionQuantity.textContent);
  quantity+= 1;
  for (i = 0; i < list.length; i++) {
    
    const result = list[i].textContent * (quantity)/portionQuantity.textContent;
    list[i].textContent = result;
  }

  portionQuantity.textContent = quantity;
}
plusButton.addEventListener('click', handlePlusButton)

function handleReviewSubmitButton(){
  const li = createReview(reviewName.value, reviewText.value);

  reviewList.append(li);

}
reviewSubmitButton.addEventListener('click', handleReviewSubmitButton)

function createReview(name, review){
  const p1 = document.createElement("p");
  p1.textContent = name + ":";
  p1.classList.add("review-text-sample")

  const p2 = document.createElement("p");
  p2.textContent = review;
  p2.classList.add("review-text-sample")

  const li = document.createElement("li");
  li.classList.add("review");
  li.appendChild(p1);
  li.appendChild(p2);


  return li;
}