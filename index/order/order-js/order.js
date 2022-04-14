const ORDERS =
    [
        {
            "title": "OPEN ORDERS",
            "orderContainers": [
                {
                    "image": `/styles/img/mathsred.svg`,
                    "text": `New General Mathematics for Junior Secondary Schools 1</h6>`,
                    "orderNumber": `Order 23157`,
                    "quantity": `Quantity: <span id="num">2</span>`,
                    "deliver": `DELIVERED`,
                    "date": `On 22-04-2018`,
                    "details": `SEE DETAILS`
                },
            ]
        },
        {
            "title": "CLOSED ORDERS",
            "orderContainers": [
                {
                    "image": `/styles/img/mathsred.svg`,
                    "text": `New General Mathematics for Junior Secondary Schools 1</h6>`,
                    "orderNumber": `Order 23157`,
                    "quantity": `Quantity: <span id="num">2</span>`,
                    "deliver": `DELIVERED`,
                    "date": `On 22-04-2018`,
                    "details": `SEE DETAILS`
                },
                {
                    "image": `/styles/img/mathsred.svg`,
                    "text": `New General Mathematics for Junior Secondary Schools 1</h6>`,
                    "orderNumber": `Order 23157`,
                    "quantity": `Quantity: <span id="num">2</span>`,
                    "deliver": `DELIVERED`,
                    "date": `On 22-04-2018`,
                    "details": `SEE DETAILS`
                },
            ]
        },
    ]

let orderButtons, mother, wrapperBox,slides,card;
wrapperBox = document.querySelector('.wrapper-box')
slides = document.querySelector('.slides')
card = document.querySelector('.card')
ORDERS.map(order => {
    let [orderdetails, count] = ['', 1]
    order.orderContainers.map(orderContainer => {
        orderdetails += `<div class="card mt-3 order-card" key=${count}>
        <div class="open-items">
            <div class="items mb-2 mb-lg-0">
                <img src=${orderContainer.image} alt="Redmathtextbook" class="img-fluid">
            </div>
            <div class="text-order d-flex justify-content-center">
                <h6 class="">${orderContainer.text}</h6>
                <p class="mb-0">${orderContainer.orderNumber}</p>
                <p class="mb-0">${orderContainer.quantity}</p>
                <p class="mb-0 deliv">${orderContainer.deliver}</p>
                <p class="mb-0" id="deliveryDate">${orderContainer.date}</p>
            </div>
            <div class="view-order  text-end">
                <a href="#">${orderContainer.details}</a>
            </div>
        </div>
    </div>`
        count++
        closeItems.innerHTML += orderdetails
    })
    let orderTitle = `
        <h4 id="open" class="order active">${order.title}</h4>
    `
    slides.innerHTML += orderTitle
})



orderButtons = document.querySelectorAll('.order')
orderButtons.forEach(orderButton => orderButton.addEventListener('click', (event) => {
    mother = event.target.closest('.slides').querySelector('.active')
    event.target.classList.add('active')
    mother.classList.remove('active')

    console.log('hi')
}));