const loadCategories = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    showAllCategories(categories)
}

const showAllCategories = (categories)=>{
    const tabContainer = document.getElementById('tab-container');
    categories.forEach(category => {
        const tabDiv = document.createElement('div');
        tabDiv.classList.add('tabs');
        tabDiv.innerHTML = `
        <a onClick="handleTabClick('${category.category_id}')" class="tab text-lg text-black">${category.category}</a>
        `;
        tabContainer.appendChild(tabDiv);
    })
}

const handleTabClick = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const singleCategory = data.data;
    console.log(singleCategory);
    const cardContainer = document.getElementById('card-container');
    singleCategory.forEach(perCategory => {
    const cardDiv = document.createElement('div');
    cardDiv.classList = `card mt-8 bg-base-300 shadow-xl `
    cardDiv.innerHTML = `

        <figure><img src="${singleCategory.thumbnail
        }" alt="" /></figure>
        <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>

    `;
    cardContainer.appendChild(cardDiv);
    })

    

    
}




loadCategories();