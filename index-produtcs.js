fetch('Products.json').
then(response => response.json()).
then(json => {
    html1 = "";
    for(item of json){
        html1 += `
            <div class="card col-3 g-4 border-0" style="height:300px;">
            <img class="card-img-top" src="${item.img}" alt="Card image" style="width:100%; height:150px">
            <div class="card-body">
              <h4 class="card-title">${item.item}</h4>
              <p class="card-text text-truncate">${item.desc}</p>
              <a href="#" class="btn btn-primary text-truncate">View More</a>
            </div>
            </div>
            `;
    }
    document.getElementById("products").innerHTML = html1;
});