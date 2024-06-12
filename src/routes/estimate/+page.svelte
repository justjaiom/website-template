<section >
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat xl:mx-10 xl:mb-5"
    style="
        background-position: 50%;
        background-image: url('images/hero2.jpg');
        height: 500px;
      "
  >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed"
    >
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1
            class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
          >
            Get A Free Quote<br /><span>For Your Yard</span>
          </h1>

          <p class="text-lg">
            Fill out the form and start booking services! <br /> We will get back
            to you, with your quote, as soon as we can!
          </p>
        </div>
      </div>
    </div>
  </div>

  <form
    id="quotes"
    method="post"
    class=" bg-gray-100 flex items-center justify-center xl:mt-10 xl:mx-40 xl:rounded-lg xl:mb-10 p-10"
  >
    <div class="container max-w-screen-xl mx-auto">
      <!-- Original Desktop Version -->
      <div class="block">
        <div class="bg-white rounded-xl shadow-lg p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Personal Details</p>
            </div>

            <div class="col-span-2">
              <div class="md:grid gap-4 gap-y-2 text-sm cols-span-2 md:grid-cols-2">
                <div>
                  <label for="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
                  />
                </div>
            
                <div>
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
            
                <!-- Stack inputs on small screens -->
                <div class="">
                  <label for="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div>
            
                <!-- Stack inputs on small screens -->
                <div class="">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div>
            
                <div class="col-span-2">
                  <label for="howCanWeHelp">How Can We Help?</label>
                  <textarea
                    name="howCanWeHelp"
                    id="howCanWeHelp"
                    class="h-40 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  ></textarea>
                </div>
            
                <div class="col-span-2 flex justify-end">
                  <button
                    id="submit"
                    class="bg-pop-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </form>

  <!-- services -->

  <h1
    class="container mx-auto text-center text-3xl md:text-3xl xl:text-4xl mb-3 font-bold tracking-tight"
  >
    View Our Services Below
  </h1>

  <section>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <!--Card 1-->
      <div class="rounded overflow-hidden shadow-lg">
        <img
          loading="lazy"
          class="w-full max-h-96 object-cover"
          src="/images/lawncare.webp"
          alt="TruHelp LLC lawn Serices"
        />
        <div class="px-6 py-4">
          <h1 class="font-bold text-xl mb-2">Lawn Services</h1>
          <p class="text-gray-700 text-base">
            We believe that a beautiful lawn begins with healthy grass, which is
            why we offer a range of comprehensive lawn services, including
            expert mowing, precision weed eating, and fertilizing.
          </p>
        </div>
        <div class="flex justify-center items-center px-6 py-4">
          <a
            class="inline-block px-7 py-3 mr-2 bg-pop-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="/services"
            role="button"
            >Learn More
          </a>
        </div>
      </div>
      <!--Card 2-->
      <div class="rounded overflow-hidden shadow-lg">
        <img
          loading="lazy"
          class="w-full max-h-96"
          src="/images/lawnmaintenance.jpg"
          alt="TruHelp LLC Maintenance Services"
        />
        <div class="px-6 py-4">
          <h1 class="font-bold text-xl mb-2">Maintenance</h1>
          <p class="text-gray-700 text-base">
            Maintain the beauty of your landscape throughout the year with our
            expert maintenance services, which include tree trimming, pruning,
            and leaf removal. We have the expertise to keep your best lawn.
          </p>
        </div>
        <div class="flex justify-center items-center px-6 py-4">
          <a
            class="inline-block px-7 py-3 mr-2 bg-pop-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="/services"
            role="button"
            >Learn More
          </a>
        </div>
      </div>

      <!--Card 3-->
      <div class="rounded overflow-hidden shadow-lg">
        <img
          loading="lazy"
          class="w-full max-h-96"
          src="/images/additional.jpg"
          alt="Forest"
        />
        <div class="px-6 py-4">
          <h1 class="font-bold text-xl mb-2">Additional Services</h1>
          <p class="text-gray-700 text-base">
            Our custom Lawn Care services provide solutions for a variety of
            outdoor spaces. We cater to the needs and requirements of each and
            every client, guaranteeing you’ll get exactly what you want.
          </p>
        </div>
        <div class="flex justify-center items-center px-6 py-4">
          <a
            class="inline-block px-7 py-3 mr-2 bg-pop-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            href="/services"
            role="button"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>

  <script>

        
    function SendMail() {
      var params = {
        name: document.getElementById("full_name").value,
        email: document.getElementById("email").value,
        adress: document.getElementById("address").value,
        city: document.getElementById("city").value,
        message: document.getElementById("howCanWeHelp").value,
      };

      emailjs.send("service_zdaaydx", "template_xky362p", params).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }

    $("#quotes").on("submit", function (e) {
      e.preventDefault();
      SendMail();
      // Send the form data to the server using fetch API
      fetch(
        "https://script.google.com/macros/s/AKfycbwySz_zqGQcwg0_lGD9_tkCGYS14a2aGpTt_Ue2GAnbf_YmuUB_NZxOFYPZ9wV4dJcZ/exec",
        {
          method: "POST",
          body: new FormData(document.getElementById("quotes")),
        }
      )
      document.getElementById("quotes").reset();
    });
  </script>

</section>
