import Header from './component/header'
import Hero from './component/hero'
import Footer from './component/footer'
import PrivacyPolicy from './component/compo_privacy'
import TermsAndConditions from './component/compo_terms'
import AccountDeletionForm from './component/compo_delete'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PrivacyPolicy />
      <TermsAndConditions />
      <AccountDeletionForm />
      <Footer />
    </>
  )
}

export default App
