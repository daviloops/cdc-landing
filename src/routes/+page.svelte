<script>
  // This can be false if you're using a fallback (i.e. SPA mode)
  export const prerender = true;

  const src = 'src/static/images/asii.svg';
  const srcFooterImg = "src/static/images/bottomBackground.svg";
  const srcLogoImg = "src/static/images/logoDark.svg";
  const srcInProgressImg = "src/static/images/roadBarrier.png";

</script>

<div class="container">
  <div class="logo-container">
    <img alt="logo" src={srcLogoImg} class="logo-image" />
  </div>
  <div class="content-container">
    <div class="paper">
      <div class="in-progress-image-container">
        <img alt="in-progress" src={srcInProgressImg} class="in-progress-image" />
      </div>
      <p class="text">Página en construcción...</p>
      <a href="https://api.whatsapp.com/send?phone=15551234567" class="link">más información</a>
    </div>
  </div>
  <img alt="background" src={srcFooterImg} class="background-image" />
</div>

<style>
	.container {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
	}

  .background-image {
    width: 100%;
    height: auto;
  }

  .logo-container {
    width: 100%;
    padding: 1rem;
    text-align: center;
  }
  
  .logo-image {
    width: 208px;
    height: auto;
  }
  
  .content-container {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }

  .in-progress-image-container {
    margin-bottom: 0.5rem;
  }

  .in-progress-image {
    width: 91px;
    height: auto;
  }

  .paper {
    width: fit-content;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .text {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  .link {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
</style>
