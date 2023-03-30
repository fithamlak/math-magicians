import '../css/home.css';

const Home = () => (
  <section className="home">
    <h1>Welcome to our page!</h1>
    <p>
      {`
      There is debate over whether mathematical objects such as numbers and points exist naturally or are human creations. The mathematician Benjamin Peirce called mathematics "the science that draws necessary conclusions". Albert Einstein, on the other hand, stated that "as far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality
      `}
    </p>
    <p>
      {`
      Through abstraction and logical reasoning mathematics evolved from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity for as far back as written records exist. Rigorous arguments first appeared in Greek mathematics, most notably in Euclid's Elements. Mathematics continued to develop, in fitful bursts, until the Renaissance, when mathematical innovations interacted with new scientific discoveries, leading to an acceleration in research that continues to the present day. 
      `}
    </p>
  </section>
);

export default Home;
