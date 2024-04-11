var products = [
    { name: "black chair", headline: "looks very nice", price: "10,000 Rs", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Shirt", headline: "Cottob Fabric", price: "1,000 Rs", image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww" },
    { name: "Pink chair", headline: "soft like cloud", price: "12,000 Rs", image: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Tie", headline: "Brown,Silk", price: "850 Rs", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww" },
    { name: "brown chair", headline: "wood material", price: "15,000 Rs", image: "https://plus.unsplash.com/premium_photo-1681558402395-c2ef667e77dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "Shoes", headline: "Fashion & Beauty", price: "5,000 Rs", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Girls'Top", headline: "Woolen Rabric New Style", price: "15,00 Rs", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fHww" },
    { name: "T-shirt", headline: "Pure cotton Fabric ", price: "5,000 Rs", image: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww" },
    { name: "Hoodie", headline: "Fashion & Beauty", price: "3,000 Rs", image: "https://media.istockphoto.com/id/1935418241/photo/childrens-tracksuits-on-a-white-background-advertising.webp?b=1&s=170667a&w=0&k=20&c=IYHcDIJ6SgDSUinAKhVoCTfRstxOc6jyORalZ7TOUA4=" },
    { name: "Shoes", headline: "Fashion & Beauty", price: "5,000 Rs", image: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
]
var adcart = [];
function displayCards() {
    var clutter = "";
    products.forEach(function (Product, index) {
        clutter += `<div class="card">
    <img src="${Product.image}"
        alt="">
    <h1>${Product.name}</h1>
    <p>${Product.headline}</p>
    <div class="price">
        <h4 data-index="${index}">${Product.price}</h4><i data-index="${index}" class="add ri-add-circle-fill"></i>
    </div>
</div>`
    })
    document.querySelector(".content").innerHTML = clutter;
}

function addCart() {
    document.querySelector(".content").addEventListener("click", function (dets) {
        if (dets.target.classList.contains('add')) {
            adcart.push(products[dets.target.dataset.index])
            console.log(adcart);
        }
    })
}

function showCart() {
    var flag = 0;
    document.querySelector(".productcart").addEventListener("click", function () {
          if (flag == 0) {
            document.querySelector("#rightcart").style.display = "block";

            var additem = "";
            adcart.forEach(function (items,index) {
                additem += `<div class="addcart">
          <img src="${items.image}"
              alt="">
          <div class="item">
              <h1>${items.name}</h1>
              <h2>${items.price}</h2>
          </div>
          <i data-index="${index}" class="remove ri-close-circle-line"></i>
      </div>`
            })
            console.log("hey")
            document.querySelector("#pcart").innerHTML = additem;
            flag = 1;
        }
        else{
            document.querySelector("#rightcart").style.display = "none"; 
            flag = 0;
        }
        })
}
function removeCart() {
    document.querySelector("#pcart").addEventListener("click", function (dets) {
        if (dets.target.classList.contains('remove')) {
            adcart.pop(adcart[dets.target.dataset.index])
            console.log(adcart);
        }
    })
}
removeCart();
showCart();
addCart();
displayCards();