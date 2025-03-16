import Title from "./Title"
import TeamItem1 from "./TeamItem1"
import TeamItem2 from "./TeamItem2"
import TeamItem3 from "./TeamItem3"

const TeamList = () => {
    const title = {
        text: " Team Lists",
        description: "We trust on this all team"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <TeamItem1/>
                    <TeamItem2/>
                    <TeamItem3/>
                </div>
            </div>
        </section>
    )
}

export default TeamList;