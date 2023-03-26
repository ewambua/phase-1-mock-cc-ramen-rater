// write your code here
let ramen = []

const ramenMenu = document.getElementById('ramen-menu')
const ramenDetail = document.getElementById('ramen-detail')
const [ramenDetailImage, ramenDetailName, ramenDetailRestaurant] = ramenDetail.children
const commentDisplay = document.getElementById('comment-display')
const ratingDisplay = document.getElementById('rating-display')

getRamen();
renderDetails();

function getRamen() {
    return fetch(`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(data => {
        ramen = data
        ramen.forEach(r => {
            ramenItem(r)
        })
    })
}

function ramenItem(r) {
    const ramenImage = document.createElement('img')
    ramenImage.src = r.image
    ramenImage.alt = r.name
    ramenImage.dataset.id = r.id
    ramenMenu.append(ramenImage)
}

function renderDetails() {
    ramenMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            getRamenDetails(e.target.dataset.id)
        }
    })
}

function getRamenDetails(id) {
    const selected = ramen.find(r => r.id == id)
    ramenDetailImage.src = selected.image
    ramenDetailName.innerText = selected.name
    ramenDetailRestaurant.innerText = selected.restaurant
    commentDisplay.innerText = selected.commentfetchementById('new-restaurant')
    const ramenRatingInput = document.getElementById('new-rating')
    const ramenCommentInput = document.getElementById('new-comment')

    ramenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let newRamen = {
            name: ramenNameInput.value,
            restaurant: ramenRestaurantInput.value,
            image: ramenImageInput.value,
            rating: Number(ramenRatingInput.value),
            comment: ramenCommentInput.value
        }
        ramen.push(newRamen)
        getRamenDetails(newRamen)
    })
}
