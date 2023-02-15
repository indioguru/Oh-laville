const HomeEarlyBirds = () => {
  return (
    <div className="home_earlyBird containerAll">
      <div className="home_earlyBird_container">
        <div className="header">
          <h1>PRIMEROS TIEMPOS TOUR 2023</h1>
          <p>
            Inscríbete para tener la primera opción de compra para los shows de
            OLV y de Paola en 2023. También recibirás sorpresas bellas.
          </p>
        </div>
        <form
          action="https://ohlaville.us7.list-manage.com/subscribe/post?u=60d8e819dbae24eef7cbfd5f4&amp;id=8010653072&amp;f_id=0063cee4f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate content_flex"
          target="_blank"
          noValidate
        >
          <div className="content_flex">
            <div className="content_inputs">
              <div className="input">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="NOMB"
                  class="required"
                  id="mce-NOMB"
                  required
                />
              </div>

              <div className="input">
                <label htmlFor="name">Apellido</label>
                <input
                  type="text"
                  name="APELL"
                  class="required"
                  id="mce-APELL"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="name">Celular</label>
                <input
                  type="text"
                  name="MMERGE7"
                  class="required"
                  id="mce-MMERGE7"
                  required
                />
              </div>
              <div class="input">
                <label htmlFor="name">Ciudad</label>

                <select name="CIUDAD" class="required" id="mce-CIUDAD" required>
                  <option value=""></option>
                  <option value="Barranquilla">Barranquilla</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Bucaramanga">Bucaramanga</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartagena">Cartagena</option>
                  <option value="CDMX">CDMX</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Santa Marta">Santa Marta</option>
                  <option value="Sogamoso">Sogamoso</option>
                  <option value="Tunja">Tunja</option>
                  <option value="Otra">Otra</option>
                  <option value="Ipiales">Ipiales</option>
                  <option value="Manizales">Manizales</option>
                </select>
                <span id="mce-CIUDAD-HELPERTEXT" class="helper_text"></span>
              </div>
            </div>
            
            <div className="clear" style={{ display: "none" }}>
              <input
                type="submit"
                value="SUSCRÍBETE AL NEWSLETTER"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>

            <div className="contet_button">
              <button>ENVIAR</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeEarlyBirds;
