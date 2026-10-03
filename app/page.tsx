const currentSite = "https://www.hafanof.cz";

const images = {
  logo: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002293-0a78e0a78f/sv%C4%9Btl%C3%A9%20logo.png?ph=544a90f80c",
  hero: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002461-45b2145b23/image-crop-200002455-1.jpeg?ph=544a90f80c",
  editorial: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002434-ed926ed928/_MG_7650.jpeg?ph=544a90f80c",
  merilyn: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002467-8d0ba8d0bc/149790600_1544860229033813_3406909265323877887_n.jpeg?ph=544a90f80c",
  charley: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002466-8429084292/481482211_667402872298483_7617371859678699130_n.jpeg?ph=544a90f80c",
  nikita: "https://544a90f80c.clvaw-cdnwnd.com/5fe4f8048c80b8dbab08c7bb45574109/200002471-011a4011a7/481215730_668207755551328_7903417834772427664_n.jpeg?ph=544a90f80c"
};

const helpCards = [
  {
    number: "01",
    title: "Darovat",
    text: "Finanční pomoc nám umožňuje zajistit péči tam, kde je právě potřeba.",
    href: `${currentSite}/financni-pomoc/`
  },
  {
    number: "02",
    title: "Dočasná péče",
    text: "Poskytněte pejskovi bezpečné místo, než najde svůj nový domov.",
    href: `${currentSite}/docasna-pece/`
  },
  {
    number: "03",
    title: "Patronství",
    text: "Podporujte konkrétního svěřence a pomáhejte s jeho péčí.",
    href: `${currentSite}/stan-se-patronem/`
  },
  {
    number: "04",
    title: "Psí přání",
    text: "Pořiďte konkrétní věc, kterou naši svěřenci právě potřebují.",
    href: `${currentSite}/psi-prani/`
  }
];

const stories = [
  {
    name: "Merilyn",
    image: images.merilyn,
    text: "Prošla si peklem v množírně a dlouho jsme bojovali o její život. Dnes má bezpečí, lásku a domov, jaký si vždy zasloužila."
  },
  {
    name: "Charley",
    image: images.charley,
    text: "Jako malé štěně absolvoval dlouhý rok klidového režimu a mnoha operací. Nakonec zůstal tam, kde byl milovaný od začátku – ve své dočasné péči."
  },
  {
    name: "Nikita",
    image: images.nikita,
    text: "Kdysi byla považovaná za neadoptovatelnou a nesnesla se téměř s nikým. Dnes má skvělý domov a dokonce i své psí kamarády."
  }
];

const news = [
  { date: "23. 08. 2026", title: "Důležitá změna – nové číslo účtu Hafanof z.s." },
  { date: "05. 07. 2026", title: "Nová kapitola pro náš azyl: Stabilita a rozvoj pro naše svěřence" },
  { date: "27. 01. 2025", title: "Vánoční sbírka SuperZoo 2024" }
];

export default function HomePage() {
  return (
    <main>
      <div className="topbar">
        <div className="shell topbarInner">
          <span>Pro kontakt využijte WhatsApp</span>
          <div className="topbarLinks">
            <a href="mailto:niki.hafanof@outlook.cz">niki.hafanof@outlook.cz</a>
            <a href="https://wa.me/420704746761">+420 704 746 761</a>
          </div>
        </div>
      </div>

      <header className="siteHeader">
        <div className="shell headerInner">
          <a className="brand" href="#top" aria-label="Hafanof – domů">
            <img src={images.logo} alt="Hafanof z.s. – Láska, co vrtí ocasem" />
            <span className="brandWord">HAFANOF</span>
          </a>

          <nav className="desktopNav" aria-label="Hlavní navigace">
            <a href="#pribeh">O nás</a>
            <a href="#pribehy">Příběhy</a>
            <a href="#pomoc">Jak pomoci</a>
            <a href="#novy-azyl">Nový azyl</a>
            <a href="#aktuality">Aktuality</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a className="button buttonGold headerCta" href={`${currentSite}/pomahejte-s-nami/`}>
            Chci pomoct
          </a>

          <details className="mobileMenu">
            <summary>Menu</summary>
            <div className="mobileMenuPanel">
              <a href="#pribeh">O nás</a>
              <a href="#pribehy">Příběhy</a>
              <a href="#pomoc">Jak pomoci</a>
              <a href="#novy-azyl">Nový azyl</a>
              <a href="#aktuality">Aktuality</a>
              <a href="#kontakt">Kontakt</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Hafanof z.s.</div>
            <h1>Místo, kde začínají nové životy.</h1>
            <p className="heroLead">
              Dáváme bezpečí, péči a druhou šanci psům, kteří ji potřebují nejvíc.
            </p>
            <div className="heroActions">
              <a className="button buttonGold" href={`${currentSite}/pomahejte-s-nami/`}>
                Chci pomoct
              </a>
              <a className="button buttonSoft" href={`${currentSite}/pribeh-tym/`}>
                Poznat Hafanof
              </a>
            </div>
            <div className="heroNote">
              <span className="heroNoteLine" />
              <span>Láska, co vrtí ocasem.</span>
            </div>
          </div>

          <div className="heroMedia">
            <div className="heroPhotoFrame">
              <img
                src={images.hero}
                alt="Pes v péči Hafanof z.s."
                className="heroPhoto"
              />
            </div>
            <div className="floatingCard">
              <span>Naše poslání</span>
              <strong>Druhá šance pro psy v nouzi</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="missionStrip">
        <div className="shell missionGrid">
          {[
            ["01", "Záchrana", "Pomoc psům, kteří se ocitli v nouzi."],
            ["02", "Bezpečí", "Dočasná péče a klidné zázemí."],
            ["03", "Péče", "Potřebná péče a příprava na další život."],
            ["04", "Nový domov", "Hledání bezpečných a vhodných rodin."]
          ].map(([number, title, text]) => (
            <article className="missionItem" key={number}>
              <span className="missionNumber">{number}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section introSection" id="pribeh">
        <div className="shell introGrid">
          <div className="sectionHeading">
            <span className="eyebrow">Kdo jsme</span>
            <h2>Druhá šance pro psy, kteří ji potřebují.</h2>
          </div>
          <div className="introCopy">
            <p>
              Hafanof z.s. pomáhá psům v nouzi, zajišťuje jim potřebnou péči a hledá pro ně
              bezpečné nové domovy. Spolupracujeme s dobrovolníky, dočasnými péčemi i dalšími
              organizacemi a postupně budujeme vlastní zázemí.
            </p>
            <a className="textLink" href={`${currentSite}/pribeh-tym/`}>
              Poznat náš příběh <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="shelterSection" id="novy-azyl">
        <div className="shell shelterGrid">
          <div className="shelterMedia">
            <img src={images.editorial} alt="Hafanof z.s. – fotografie ze současného webu" />
          </div>
          <div className="shelterCopy">
            <span className="eyebrow">Nový azyl</span>
            <h2>Budujeme místo, které bude opravdu jejich.</h2>
            <p>
              Dnes pomáháme především díky dočasným péčím. Naším cílem je vlastní bezpečné
              zázemí pro psy v nouzi – místo pro péči, zotavení a přípravu na nový život.
            </p>
            <p>
              Každý příspěvek nás posouvá blíž k místu, kde budeme moci pomáhat ještě více.
            </p>
            <div className="shelterActions">
              <a className="button buttonGold" href={`${currentSite}/financni-pomoc/`}>
                Pomoct postavit azyl
              </a>
              <a className="textLink" href={`${currentSite}/novy-azyl/`}>
                Více o projektu <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section helpSection" id="pomoc">
        <div className="shell">
          <div className="sectionTop">
            <div>
              <span className="eyebrow">Pomáhejte s námi</span>
              <h2>Každý může pomoci jinak.</h2>
            </div>
            <p>
              Vyberte způsob, který vám dává smysl. I malá pomoc může znamenat velkou změnu.
            </p>
          </div>

          <div className="helpGrid">
            {helpCards.map((card) => (
              <a className="helpCard" href={card.href} key={card.number}>
                <span className="helpNumber">{card.number}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <span className="cardArrow">↗</span>
              </a>
            ))}
          </div>

          <div className="donationBand">
            <div>
              <span className="donationLabel">Finanční podpora</span>
              <strong>2003564038 / 2010</strong>
            </div>
            <p>
              Příspěvek pomáhá financovat péči o psy a další činnost Hafanofu.
            </p>
            <a className="button buttonDark" href={`${currentSite}/financni-pomoc/`}>
              Jak darovat
            </a>
          </div>
        </div>
      </section>

      <section className="storiesSection" id="pribehy">
        <div className="shell">
          <div className="sectionTop lightHeading">
            <div>
              <span className="eyebrow">Příběhy z nových domovů</span>
              <h2>Některé příběhy už mají svůj šťastný konec.</h2>
            </div>
            <a className="textLink lightLink" href={`${currentSite}/clanky-hafanof/`}>
              Všechny příběhy <span>→</span>
            </a>
          </div>

          <div className="storyGrid">
            {stories.map((story) => (
              <article className="storyCard" key={story.name}>
                <div className="storyImageWrap">
                  <img src={story.image} alt={story.name} className="storyImage" />
                </div>
                <div className="storyBody">
                  <h3>{story.name}</h3>
                  <p>{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section teamSection">
        <div className="shell teamPanel">
          <div>
            <span className="eyebrow">Lidé za Hafanofem</span>
            <h2>Za každým zachráněným psem stojí lidé.</h2>
          </div>
          <div>
            <p>
              Hafanof tvoří malý tým lidí, které spojuje stejný cíl – pomáhat psům,
              kteří se ocitli v nouzi. Každý má svou roli, společně ale pracujeme na tom,
              aby naši svěřenci dostali péči, bezpečí a šanci začít znovu.
            </p>
            <a className="button buttonSoft" href={`${currentSite}/pribeh-tym/`}>
              Poznat náš tým
            </a>
          </div>
        </div>
      </section>

      <section className="section newsSection" id="aktuality">
        <div className="shell">
          <div className="sectionTop">
            <div>
              <span className="eyebrow">Co je u nás nového</span>
              <h2>Ze života Hafanofu.</h2>
            </div>
            <p>Novinky, příběhy našich svěřenců, akce i to, na čem právě pracujeme.</p>
          </div>

          <div className="newsList">
            {news.map((item, index) => (
              <a href={`${currentSite}/novinky/`} className="newsItem" key={item.title}>
                <span className="newsIndex">{String(index + 1).padStart(2, "0")}</span>
                <span className="newsDate">{item.date}</span>
                <strong>{item.title}</strong>
                <span className="newsArrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="transparencySection">
        <div className="shell transparencyGrid">
          <div>
            <span className="eyebrow">Transparentně a otevřeně</span>
            <h2>Důvěra je pro nás závazek.</h2>
          </div>
          <div className="transparencyCopy">
            <p>
              Chceme, abyste věděli, kdo jsme, jak Hafanof funguje a kam směřuje vaše pomoc.
              Hafanof je zapsaný spolek s IČO <strong>297 27 049</strong>.
            </p>
            <div className="transparencyLinks">
              <a href={`${currentSite}/ke-stazeni-a-tisku/`}>Dokumenty <span>→</span></a>
              <a href={`${currentSite}/pomahejte-s-nami/`}>Jak pomoci <span>→</span></a>
              <a href={`${currentSite}/pribeh-tym/`}>O Hafanofu <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="closingCta">
        <div className="shell closingInner">
          <img src={images.logo} alt="" aria-hidden="true" />
          <span className="eyebrow">Láska, co vrtí ocasem</span>
          <h2>Pomáhejte s námi měnit psí příběhy.</h2>
          <p>Adopcí, dočasnou péčí, příspěvkem nebo prostě tím, že o nás řeknete dál.</p>
          <div className="heroActions centeredActions">
            <a className="button buttonGold" href={`${currentSite}/pomahejte-s-nami/`}>
              Chci pomoct
            </a>
            <a className="button buttonOutlineLight" href="mailto:info@hafanof.cz">
              Kontaktovat Hafanof
            </a>
          </div>
        </div>
      </section>

      <footer className="footer" id="kontakt">
        <div className="shell footerGrid">
          <div className="footerBrand">
            <img src={images.logo} alt="Hafanof z.s." />
            <div>
              <strong>HAFANOF z.s.</strong>
              <span>Láska, co vrtí ocasem.</span>
            </div>
          </div>

          <div>
            <span className="footerTitle">Finanční podpora</span>
            <strong className="footerAccount">2003564038 / 2010</strong>
          </div>

          <div>
            <span className="footerTitle">Kontakt</span>
            <a href="mailto:info@hafanof.cz">info@hafanof.cz</a>
            <a href="https://wa.me/420704746761">+420 704 746 761</a>
          </div>

          <div>
            <span className="footerTitle">Sledujte nás</span>
            <a href="https://www.facebook.com/Hafanof">Facebook</a>
            <a href="https://www.instagram.com/azyl_hafanof/">Instagram</a>
          </div>
        </div>

        <div className="shell footerBottom">
          <span>© 2026 Hafanof z.s. · IČO 297 27 049</span>
          <span>Pracovní demo nového webu</span>
        </div>
      </footer>
    </main>
  );
}
