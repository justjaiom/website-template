<script>
  import { Alert } from 'flowbite-svelte';
</script>

<!-- Section: Design Block -->
<section class="lg:mb-10 mb-5">
  <div
    class="md:mx-20 md:mt-10 px-6 py-12 md:rounded-md md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left"
  >
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="mt-12 lg:mt-0">
          <h1
            class="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
          >
            Thanks for working with us!
          </h1>
          <p class="text-xl font-medium mb-5 md:mb-10">
            This form is not a payment site, this is just to let us keep track
            and recipt your payment
          </p>

          <a
            href="https://www.truhelptexas.com/"
            rel="external"
            class="inline-block px-7 py-3 mr-2 bg-pop-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Vist our main page</a
          >
          <a
            class="inline-block px-7 py-3 bg-transparent text-primary-600 font-medium text-sm leading-snug uppercase rounded hover:text-pop-700 hover:bg-grey-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
            href="https://www.truhelptexas.com/about">Contact us</a
          >
        </div>
        <div class="mb-12 lg:mb-0 lg:ml-10">
          <img
            loading="lazy"
            class=" rounded-2xl shadow-md"
            src="/images/pit.jpg"
            alt="Truhelp LLC"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section>

  <form
    id="accounts"
    method="post"
    class=" bg-gray-100 flex items-center justify-center xl:mt-10 xl:mx-40 xl:rounded-lg xl:mb-10 p-10"
  >
    <div class="container max-w-screen-xl mx-auto">
      <Alert id="success_alert" color="green" class="hidden">
        <span class="font-medium col-span-2">Success alert!</span>
        Thanks for submiting, enjoy your yard
      </Alert>
      <!-- Original Desktop Version -->
      <div class="block">
        <div class="bg-white rounded-xl shadow-lg p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
            <div class="text-gray-600">

              

              <p class="font-medium text-lg">Please input your service information</p>
            </div>
            

            <div class="col-span-2">
              
              <div
                class="md:grid gap-4 gap-y-2 text-sm cols-span-2 md:grid-cols-2"
              >
                <div>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div>
                  <label for="service">What was the service?</label>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    required
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
                    required
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <!-- Stack inputs on small screens -->
                <div class="">
                  <label for="date">Date of your service</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="">
                  How did you pay?
                  <select
                    name="options"
                    id="options"
                    required
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="cash" selected disabled>Select Option</option>
                    <option value="check">Check</option>
                    <option value="venmo">Venmo</option>
                    <option value="zelle">Zelle</option>
                    <option value="paypal">PayPal</option>
                    <option value="cashapp">CashApp</option>
                  </select>
                </div>
                

                <div class="">
                  <label for="amount">How much did you pay?</label>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    required
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="col-span-2 mb-3 md:mb-0">
                  <label for="people">Which team member did the service?</label>
                  <div>
                    <select
                      name="people"
                      id="people"
                      required
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    >
                      <option value="cash" selected disabled>Select Option</option>
                      <option value="evan">Evan</option>
                      <option value="caden">Caden</option>
                      <option value="both">Evan and Caden</option>
                      <option value="other">Other</option>
                      <option value="IDK">I don't know</option>
                    </select>
                  </div>
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

  <script>
$("#accounts").on("submit", function (e) {
    e.preventDefault();

    // Show the success alert
    $("#success_alert").removeClass("hidden");

    // Send the form data to the server using fetch API
    fetch(
        "https://script.google.com/macros/s/AKfycby6IlaHbhiIWu1heZSDApM0yQ8GBwwZIIFQ-2vGXao4m2vIZEqAordRw2A6MDyTwseD/exec",
        {
            method: "POST",
            body: new FormData(document.getElementById("accounts")),
        }
    );

    // Reset the form after submission
    document.getElementById("accounts").reset();
});

  </script>

  
</section>
