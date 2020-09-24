const products = [
  { flavor: 'фуа-гра', count: 10, mouseCount: 'мышь', size: '0.5', disable: false },
  { flavor: 'рыбой', count: 40, mouseCount: '2 мыши', size: '2', disable: false },
  { flavor: 'курой', count: 100, mouseCount: '5 мышей', size: '5', disable: false }
];

const productList = document.querySelector('#cats-list');

products.map((product) => {
  const productItem = document.createElement('div');
  productItem.className = 'cats-item item';
  productItem.innerHTML = `
    <div class="item__main ${product.disable ? 'disable' : ''}">
      <div class="border">
        <div class="item__header">
          <p class="item__suptitle">
            Сказочное заморское яство
          </p>
          <p class="item__title">
            Нямушка<br /><span>с ${product.flavor}</span>
          </p>
          <p class="item__subtitle">
            ${product.count} порций<br />${product.mouseCount} в подарок
          </p>
        </div>
        <img
          class="item__img"
          src="./img/cat.png"
          alt=""
        />
        <div class="item__circle">
          <div class="item__circle-text">${product.size}</div>
        </div>
      </div>
    </div>
    <div class="item__footer">
      ${product.disable ?
        `Печалька, с ${product.flavor} закончился` :
        'Чего сидишь? Порадуй котэ, <a href="#">купи</a>'}
    </div>`;
  productItem.addEventListener('click', (evt)=>{
    if(!productItem.querySelector('.item__main').classList.contains('disable')){
      productItem.querySelector('.item__main').classList.toggle('item__main--select');
    }
  });
  productList.append(productItem);
});


/*
<div class="cats-item item">
            <div class="item__main">
              <div class="border">
                <div class="item__header">
                  <p class="item__suptitle">
                    Сказочное заморское яство
                  </p>
                  <p class="item__title">
                    Нямушка<br /><span>с фуа-гра</span>
                  </p>
                  <p class="item__subtitle">
                    10 порций<br />мышь в подарок
                  </p>
                </div>
                <img
                  class="item__img"
                  src="./img/cat.png"
                  alt=""
                />
                <div class="item__circle">
                  <div class="item__circle-text">0,5</div>
                </div>
              </div>
            </div>
            <div class="item__footer">
              Чего сидишь? Порадуй котэ, <a href="#">купи</a>
            </div>
          </div>
*/