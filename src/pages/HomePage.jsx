export default function HomePage() {
  return (
    <div>
     <>
     <h1>Home Page</h1>
      <p>
        {" "}
        React öğrenme sürecinizde faydalı olabilecek bazı alıştırma
        uygulamaları:
      </p>
      <ol>
        <li>
        Görev Listesi (To-Do Listesi)
          <ul>
            <li>✔ useState: Görevleri eklemek, düzenlemek ve silmek için kullandık.</li>
            <li>✔ input bileşenimizn onKeyDown, onChange özelliklerini kullanarak veri girişini denetimli hale getirdik.</li>
            <li>✔ Propsları kullanarak bileşenler arası veri geçirme işlemini öğrenmiş olduk.</li>
          </ul>
        </li>
        <br />
        <li>
          Küçük Bir Alışveriş Sepeti Uygulaması
          <ul>
            <li>✔ useState: Ürünleri ve miktarlarını saklamak için.</li>
            <li>
            ✔ useReducer: Sepete ürün ekleme, kaldırma ve güncelleme işlemlerini
              yönetmek için.
            </li>
            <li>
            ✔ useEffect: Toplam fiyatı güncel tutmak veya kullanıcı bir ürünü
              eklediğinde bir API çağrısı yapmak için.
            </li>
            <li>
            ✔ useContext: ürünlere ait bilgileri diğer bileşenlere geçirmek maksadıyla kullandık. Bu örneğimizde props delinmesnin önüne nasıl geçebileceğimizi öğrenmiş olduk.
            </li>
          </ul>
        </li>
        <br />
        <li>
          Hava Durumu Uygulaması
          <ul>
            <li>
            ✔ useState: Şehir adı ve hava durumu bilgilerini saklamak için.
            </li>
          
            <li>
            ✔ useEffect: Kullanıcı yeni bir şehir aradığında hava durumu
              verilerini almak için.
            </li>
          </ul>
          <br />
        
        </li>
        <li>
           Uygulamalar Arası Geçiş
            <ul>
            <li>✔ BrowserRouter, Route, Routes ile bileşenler arası geçiş yaptık.</li>
            <li>✔ navigate ile bileşenler arası programatik geçiş yapmayı öğrendik.</li>
            </ul> 
          </li>
      </ol></>
    </div>
  );
}
