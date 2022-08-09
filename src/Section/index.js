import "./style.css"
const Section = ({title,body,extraHeaderContent}) => (
    <section className="section">
      <header className="section__header list__header">
        {title}
        {extraHeaderContent}
      </header>
        {body}
    </section>
);

export default Section;