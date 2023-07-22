import HamMen from "./HamMen"

const PageHead = () => {
  return (
    <header className="sticky top-0 h-20 bg-slate-50 flex justify-between">
        <img src='MISY.svg' id="page-logo" alt='YSS'></img>
        <HamMen/>
    </header>
  )
}

export default PageHead