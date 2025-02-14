import { Routes, Route, HashRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ChatCallCard from "./components/chatCallCard/ChatCallCard";
import Spell from "./pages/Spell";
import FortuneStore from "./pages/FortuneStore";
import BookPooja from "./pages/BookPooja";
import AstrologersList from "./pages/AstrologersList";
import RudraAbhishekPooja from "./pages/RudraAbhishekPooja";
import PaymentInformation from "./pages/PaymentInformation";
import BookingSuccessfull from "./pages/BookingSuccessfull";
import Gemstone from "./pages/Gemstone";
import RattiAmethyst from "./pages/RattiAmethyst";
import AddressDetails from "./pages/AddressDetails";
import AddMoney from "./pages/AddMoney";
import EditProfile from "./pages/EditProfile";
import ApplyAsAstrologer from "./pages/ApplyAsAstrologer";
import Courses from "./pages/Courses";
import CurrentCourses from "./pages/CurrentCourses";
import TarotCardReaderCourses from "./pages/TarotCardReaderCourses";
import CourseDetails from "./pages/CourseDetails";
import ScheduleLiveCourse from "./pages/ScheduleLiveCourse";
import CourseClasses from "./pages/CourseClasses";
import Register from "./pages/Register";
import LiveChat from "./pages/LiveChat";
import WalletTransaction from "./pages/WalletTransaction";
import OrderHistory from "./pages/OrderHistory";
import KundliMatchingBirthDetails from "./pages/KundliMatchingBirthDetails";
import KundliMatchingHoroscope from "./pages/KundliMatchingHoroscope";
import KundliMatchingAshtakoota from "./pages/KundliMatchingAshtakoota";
import KundliMatchingDashakoota from "./pages/KundliMatchingDashakoota";
import KundliMatchingManglikMatch from "./pages/KundliMatchingManglikMatch";
import KundliMatchingMatchConclusion from "./pages/KundliMatchingMatchConclusion";
import FreeKundliBirthDetails from "./pages/FreeKundliBirthDetails";
import FreeKundliPlanetaryDetails from "./pages/FreeKundliPlanetaryDetails";
import FreeKundliKP from "./pages/FreeKundliKP";
import FreeKundliDosh from "./pages/FreeKundliDosh";
import FreeKundliReport from "./pages/FreeKundliReport";
import FreeKundliVimshottariDahsa from "./pages/FreeKundliVimshottariDahsa";
import FreeKundliRemedies from "./pages/FreeKundliRemedies";
import FreeKundliFavourableForYou from "./pages/FreeKundliFavourableForYou";
import CoursePDFDownload from "./pages/CoursePDFDownload";
import LiveStreaming from "./pages/LiveStreaming";
import DemoClass from "./pages/DemoClass";
import DemoClassDetails from "./pages/DemoClassDetails";
import AstrologerProfile from "./pages/AstrologerProfile";
import DailyHoroscope from "./components/freeServices/DailyHoroscope";
import KundliMatching from "./components/freeServices/KundliMatching";
import FreeKundli from "./components/freeServices/FreeKundli";
import PanchangReport from "./components/freeServices/PanchangReport";
import ProductPaymentInformation from "./pages/ProductPaymentInformation";
import EditAddress from "./pages/EditAddress";
import PoojaCompleted from "./pages/PoojaCompleted";
import RattiAmethystCompleted from "./pages/RattiAmethystCompleted";
import Blog from "./pages/Blog";
import AllClasses from "./pages/AllClassesComponent";
import AllClassesComponent from "./pages/AllClassesComponent";
import DemoClasses from "./pages/DemoClasses";
import LiveClasses from "./pages/LiveClasses";
import Workshops from "./pages/Workshops";
import TeachersList from "./pages/TeachersList";
import RegisterCourses from "./pages/RegisterCourses";
import LiveClassDetails from "./pages/LiveClassDetails";
import LiveCourseDetails from "./pages/LiveCourseDetails";
import RegisterLiveCourses from "./pages/RegisterLiveCourses";
import LivePaymentInformation from "./pages/PaymentInfo";
import LiveClass from "./pages/LiveClass";
import PrivateRoute from "./utils/PrivateRoute.js";
import LoginPage from "./pages/loginPage.jsx";
import PrivacyPolicies from "./pages/PrivacyPolicies.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import IntellectualProprietary from "./pages/IntellectualProprietary.jsx";
import ReturnRefundPolicies from "./pages/ReturnRefundPolicies.jsx";
import PricingPolicies from "./pages/PricingPolicies.jsx";
import ThankyouPage from "./pages/ThankyouPage.jsx";
import AppTermsAndConditions from "./pages/AppTermsAndConditions.jsx";
import AppPrivacyPolicies from "./pages/AppPrivacyPolicies.jsx";
import AppContactUs from "./pages/AppContactUs.jsx";
import Horoscope from "./pages/Horoscope.jsx";
import BirthDetails from "./pages/BirthDetails";
import HoroscopeChart from "./pages/HoroscopeChart";
import Ashtakoota from "./pages/Ashtakoota";
import Dashakoota from "./pages/Dashakoota";
import ManglikMatch from "./pages/ManglikMatch";
import MatchConclusion from "./pages/MatchConclusion";
import Tarot from "./components/Tarot/Tarot.jsx";
import Live from './components/Live/Live.jsx';
import HoroscopeHero from "./components/HoroSc/HoroscopeHero.jsx";

function App() {
  return (
    <HashRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" exact element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/live-streaming" element={<LiveStreaming />} />
          <Route path="/fortune-store" element={<FortuneStore />} />
          <Route path="/spell" element={<Spell />} />
          <Route path="/book-pooja" element={<BookPooja />} />
          <Route path="/astrologers-list" element={<AstrologersList />} />
          <Route
            path="/rudra-abhishek-pooja"
            element={<RudraAbhishekPooja />}
          />
          <Route
            path="/payment-information"
            element={<PaymentInformation />}
          />
          <Route path="/ChatCallCard" element={< ChatCallCard />} />
          <Route
            path="/live-payment-information"
            element={<LivePaymentInformation />}
          />
          <Route
            path="/booking-successfull"
            element={<BookingSuccessfull />}
          />
          <Route path="/gem-stone" element={<Gemstone />} />
          <Route path="/ratti-amethyst" element={<RattiAmethyst />} />
          <Route path="/address-details" element={<AddressDetails />} />
          <Route path="/add-money" element={<AddMoney />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route
            path="/apply-as-astrologer"
            element={<ApplyAsAstrologer />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/all-courses" element={<AllClassesComponent />} />
          <Route path="/current-courses" element={<CurrentCourses />} />
          <Route path="/courses/:name" element={<TarotCardReaderCourses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/live-course-details" element={<LiveCourseDetails />} />
          <Route path="/course-pdf-download" element={<CoursePDFDownload />} />
          <Route path="/schedule-live-course" element={<ScheduleLiveCourse />} />
          <Route path="/course-classes" element={<CourseClasses />} />
          <Route path="/demo-class" element={<DemoClass />} />
          <Route path="/live-class" element={<LiveClass />} />
          <Route path="/courses-demo/:id" element={<DemoClasses />} />
          <Route path="/courses-live/:id" element={<LiveClasses />} />
          <Route path="/courses-workshops" element={<Workshops />} />
          <Route path="/courses-teachers-list" element={<TeachersList />} />
          <Route path="/demo-class-details/:classId" element={<DemoClassDetails />} />
          <Route path="/live-class-details" element={<LiveClassDetails />} />
          <Route path="/astrologer-profile" element={<AstrologerProfile />} />
          <Route path="/register:userId/" element={<Register />} />
          <Route path="/thankyou/:classId" element={<ThankyouPage />} />
          <Route path="/registration-page" element={<RegisterCourses />} />
          <Route path="/registration-live-page" element={<RegisterLiveCourses />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/FreeKundli" element={<FreeKundli />} />
          <Route
            path="/wallet-transactions"
            element={<WalletTransaction />}
          />

          <Route path="/KundliMatching" element={<KundliMatching />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path='/kundli-matching' element={<KundliMatching />} />
          <Route path='/kundli-matching/birth-details' element={<BirthDetails />} />
          <Route path='/kundli-matching/horoscope-chart' element={<HoroscopeChart />} />
          <Route path='/kundli-matching/ashtakoota' element={<Ashtakoota />} />
          <Route path='/kundli-matching/dashakoota' element={<Dashakoota />} />
          <Route path='/kundli-matching/manglik-match' element={<ManglikMatch />} />
          <Route path='/kundli-matching/match-conclusion' element={<MatchConclusion />} />
          <Route
            path="/kundli-matching/birth-details"
            element={<KundliMatchingBirthDetails />}
          />
          <Route
            path="/kundli-matching/horoscope-chart"
            element={<KundliMatchingHoroscope />}
          />
          <Route
            path="/kundli-matching/ashtakoota"
            element={<KundliMatchingAshtakoota />}
          />
          <Route
            path="/kundli-matching/dashakoota"
            element={<KundliMatchingDashakoota />}
          />
          <Route
            path="/kundli-matching/manglik-match"
            element={<KundliMatchingManglikMatch />}
          />
          <Route
            path="/kundli-matching/match-conclusion"
            element={<KundliMatchingMatchConclusion />}
          />
          <Route
            path="/free-kundli/birth-details"
            element={<FreeKundliBirthDetails />}
          />
          <Route
            path="/free-kundli/planetary-details"
            element={<FreeKundliPlanetaryDetails />}
          />
          <Route path="/free-kundli/kp" element={<FreeKundliKP />} />
          <Route
            path="/free-kundli/kundli-dosh"
            element={<FreeKundliDosh />}
          />
          <Route path="/free-kundli/report" element={<FreeKundliReport />} />
          <Route
            path="/free-kundli/vimshottari-dasha"
            element={<FreeKundliVimshottariDahsa />}
          />
          <Route
            path="/free-kundli/remedies"
            element={<FreeKundliRemedies />}
          />
          <Route
            path="/free-kundli/favourable-for-you"
            element={<FreeKundliFavourableForYou />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/daily-horoscope" element={<DailyHoroscope />} />
          <Route path="/HoroscopeHero" element={<HoroscopeHero />} />
          <Route path="/privacy-policies" element={<PrivacyPolicies />} />
          <Route path="/pricing-policies" element={<PricingPolicies />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/intellectual-proprietary" element={<IntellectualProprietary />} />
          <Route path="/return-refund-policies" element={<ReturnRefundPolicies />} />
          <Route path="/panchang" element={<PanchangReport />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms_and_conditions" element={<AppTermsAndConditions />} />
        <Route path="/privacy_policy" element={<AppPrivacyPolicies />} />
        <Route path="/contact_us" element={<AppContactUs />} />

        <Route path="/Panchang-Report" element={<PanchangReport />} />
        <Route path="/Product-Payment-Information" element={<ProductPaymentInformation />} />
        <Route path="/PoojaCompleted" element={<PoojaCompleted />} />
        <Route path="/RattiAmethystCompleted" element={<RattiAmethystCompleted />} />
        <Route path="/AllClasses" element={<AllClasses />} />
        <Route path="/EditAddress" element={<EditAddress />} />
        <Route path="/Tarot" element={<Tarot />} />
        <Route path="/Live" element={<Live />} />



      </Routes>
    </HashRouter>
  );
}

export default App;
