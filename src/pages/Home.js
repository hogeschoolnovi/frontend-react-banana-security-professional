import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Homepagina</h1>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id libero provident! Accusantium at autem
          cumque, esse eum, fugiat ipsa ipsam quia quis ratione repudiandae sapiente sequi sit tempora voluptates.
          Accusantium aperiam asperiores, beatae dolor eius error expedita laboriosam maiores minima mollitia nisi
          pariatur quaerat quam ratione reiciendis rem similique unde veritatis vitae voluptatum. At atque beatae dolor
          fuga hic laudantium maxime praesentium quae quia repudiandae sapiente, sed sint, voluptas. Aliquid asperiores
          assumenda commodi consectetur cumque delectus, distinctio dolore ex facilis fugiat maiores officiis quo,
          saepe, sequi sunt tempora vero.</p>
        <p>
          Aperiam dignissimos dolore ducimus eum explicabo numquam officia quia
          quibusdam totam velit. Beatae blanditiis consequatur, deserunt eveniet perspiciatis rem tempore voluptate?
          Alias autem doloribus eum labore laboriosam omnis repellendus tenetur. Accusamus alias at consequuntur
          corporis eum expedita, illo incidunt iure labore libero nisi, numquam officiis porro quisquam sequi ut vel
          veniam veritatis voluptatem voluptatibus! Alias dolor eaque iure minus molestiae nemo, nisi odit quaerat! Ad
          atque beatae consequuntur cum delectus dolor doloremque error et eum expedita illum in itaque laudantium
          libero maxime minima neque nisi non officia omnis pariatur placeat quaerat quibusdam quidem quo quod
          repellendus sequi tempore, temporibus totam velit vitae voluptate voluptatem? Ea eaque molestias nesciunt sit
          temporibus?
        </p>
      </section>
      <section>
        <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
        <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
          account hebt.</p>
      </section>
    </>
  );
}

export default Home;
