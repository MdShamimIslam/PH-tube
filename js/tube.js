const loadCategories = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    showAllCategories(categories)
}

const showAllCategories = (categories)=>{
    console.log(categories);
    const tabContainer = document.getElementById('tab-container');
    categories.forEach(category => {
        console.log(category);
        const tabDiv = document.createElement('div');
        tabDiv.classList.add('tabs');
        tabDiv.innerHTML = `
        <a class="tab text-lg text-black">${category.category}</a>
        `;
        tabContainer.appendChild(tabDiv);
    })
}

loadCategories();