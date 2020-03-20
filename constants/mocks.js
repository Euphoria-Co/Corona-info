import { Button } from "../components";

const categories = [

];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "Michal Grochowski",
  location: "Europe",
  email: "michalgrochowski12@gmail.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const virusInfos = [
	{
		id: "akapit1",
		name: "Czym jest Koronawirus?",
		data: "<.</><dic class=\"data\"><center>Oficjalną nazwą koronawirusa z Wuhan jest <b>SARS-CoV-2</b>. Nazwa wirusa wynika z jego genetycznego podobieństwa do wirusa odpowiedzialnego za epidemię ostrej ciężkiej niewydolności oddechowej\n(SARS – Severe Acute Respiratory Syndrome) z 2003 roku. Chorobę, którą wywołuje SARS-CoV-2, nazwano <b>COVID-19</b>.\nKoronawirus zapoczątkował swoją historie w Chinach w mieście Wuhan w prowincji Hubei. Zainfekował on już ponad 150 tyś. osób na całym świecie.</center></div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit2",
		name: "Jakie są objawy zakażenia?",
		data: "<.</><div><center><b>Warto wiedzieć</b>, że objawy mogą się ukazywać dopiero po kilku dniach od zarażenia.\nNajczęściej występującymi objawami są:\n\n<ol type=\"1\">\t<li>Gorączka.</li>\t<li>Męczący kaszel.</li>\t<li>Duszności oraz problemy z oddychaniem.</li></ol>\n\n<b>Warto pamiętać</b>, że objawy mogą się różnić dla osób w różnym wieku, np:\n\n<ol type=\"1\">\t<li>Osoby w młodszym wieku są <u>znacznie mniej</u> podatne na wykazywanie objawów choroby, co nie znaczy, że nie są nosicielami i nie mogą zarazić innych osób.</li>\t<li>Osoby starsze są <u>znacznie bardziej</u> podatne na wykazywanie objawów choroby.</div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit3",
		name: "Jak mogę się uchronić przed zakażeniem?",
		data: "<.</><div><center>Na początku warto wiedzieć, że wirus potrafi utrzymać się w powietrzu przez kilka godzin, a na niektórych powierzchniach około <u>3-4 dni</u>.\nNależy pamiętać o:\n\n<ol type=\"1\"><li>Częstym myciu rąk wodą z mydłem.</li><li>Unikaniu dotykania oczu, nosa i ust.</li><li>Unikaniu miejsc publicznych oraz takich w których znajduje się dużo osób.</li><li>Zakrywaniu ust i nosa zgiętym łokciem lub chusteczką, podczasz kichania lub kasłania.</li><li>Zachowaniu bezpiecznej odległości (1-1,5m) od osoby, która kicha, kaszle lub ma gorączkę.</li></ol></center></div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit4",
		name: "Co zrobić gdy podejrzewam u siebie zarażenie koronawirusem?",
		data: "<.</><div><center>Należy sprawdzić:\n\n1. Czy masz podwyższoną temperaturę.\n2. Czy kaszlesz i masz duszności.\n3. Czy w ciągu ostatnich 14 dni przebywałeś na obszarach objętych wirusem bądź miałeś kontakt z osobą zarażoną.</center></div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit5",
		name: "Co zrobić gdy masz objawy zakażenia i wróciłeś z regionu, w którym występuje koronawirus?",
		data: "<.</><div><center>Na początku <u>warto wiedzieć</u>, że jest możliwość, niewykrycia posiadania wirusa <u>jeśli</u> jest on w bardzo wczesnej fazie rozwoju.\nJeśli w ciągu ostatnich 14 dni wróciłeś\nz kraju, w którym występuje koronawirus\ni masz takie objawy jak:\n\n1. Gorączka.\n2. Kaszel.\n3. Duszności.\nlub miałeś kontakt z osobą, u której potwierdzono zakażenie:\n \n1. Bezzwłocznie powiadom telefonicznie stację sanitarno-epidomiologiczną\n<a>LISTA STACJI EPIDOMIOLOGICZNYCH</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLUB\n\n2. Zgłoś się do oddziału zakaźnego lub oddziału obserwacyjno-zakaźnego, gdzie określony zostanie dalszy tryb postępowania medycznego.\n<a>MAPA ODZIAŁÓW ZAKAŹNYCH</a></center></div>\n",
		tag: ["Podstawowe informacje"]		
	},


	{
		id: "akapit6",
		name: "Co zrobić gdy masz objawy, ale nie byłeś w kraju lub regionie, w którym występuje koronawirus i nie miałeś kontaktu z osobą zakażoną?",
		data: "<.</><div>Stosuj podstawowe zasady ochrony,\ngdy kaszlesz i kichasz, oraz higieny rąk.\nPozostań w domu do czasu powrotu\ndo zdrowia.</center></div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit7",
		name: "Gdzie do tej pory stwierdzono przypadki zakażenia koronawirusem?",
		data: "<.</><div>Najwięcej potwierdzonych przypadków zakażenia zarejestrowano w Chinach (99%),głównie w prowincji Hubei, Korei Południowej oraz we Włoszech.</center></div>\n",
		tag: ["Podstawowe informacje"]
	},
	

	{
		id: "akapit8",
		name: "Dlaczego w profilaktyce koronawirusa ważne jest mycie rąk?",
		data: "<.</><div>Koronawirus jest osłonięty błoną tłuszczową (lipidową).Dlatego można mu zapobiegać przez zastosowanie środków chemicznych, takich jak zwykłe mydło, alkohol (minimum 60-70%) lub preparaty do dezynfekcji.</center></div>\n",
		tag: ["Podstawowe informacje"]
	},


	{
		id: "akapit9",
		name: "Fakty i mity",
		data: "<.</><div>Mit: Igor nie bije siostry, gdy ona siedzi na komputerze\n\nFakt: Igor bije siostre, gdy ona siedzi na komputerze.</div>\n",
		tag: ["Podstawowe informacje"]
  },
];

const tabs = [
  "Podstawowe informacje",
  "Mapa szpitali zakaźnych",
  "Szybkie reagowanie",
  "tab4",
  "tab5",
  "tab6"
]



export { categories, explore, products, profile, virusInfos, tabs };
