import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <div className="about">
      <section>
        <Grid container spacing={1}>
          <Grid item md={12} lg={5} xl={4}>
            <img src="src/assets/mo_head_shot.jpg" width="375" height="500" className="head_shot"/>
          </Grid>
          <Grid item md={12} lg={7} xl={8}>
            <h2>Monique is a practicing Teacher/Mentor/Public Speaker focusing on Stress Management & Personal Growth</h2>
            <p>
            Inspired by many teachers of Eastern styles of Classical Yoga & Tantra, Monique (RYT) has been studying/practicing Yoga since 2001 with a concentration on Patanjali's Ashtanga Yoga (Raja Yoga).  She has been teaching private lessons since 2015.  In addition, she currently studies at The Tantric Alchemy School of Awakening Arts & Amrit Yoga Institute, which she has received her 200-hour YTT.
            </p>
            <p>
            Monique (owner of Tools for Transformation LLC) offers one-on-one private lessons, mentorship, life coaching, classes & workshops/public speaking, emphasizing stress reduction & personal growth.
            </p>
          </Grid>
        </Grid>
      </section>
      <section>
        <h3>Private lessons consist of:</h3>
        <p>
        Teaching life transformation - Including, but not limited to using various Yoga techniques, (methods such as relaxation techniques, breathing and easy stretching techniques) in person and online, for stress management, awareness/mindfulness, growth in consciousness and making life changes.
        </p>
        <p>
        Styles of Yoga include: Gentle Yoga, Beginner’s Yoga, I AM Yoga/Meditation in Motion and will be offering Yoga Nidra Fall of 2023.
        </p>
        <p>
        In addition to Yoga, Monique is has also trained in and is a practitioner of Usui Shiki Ryoho The Usui System of Reiki Healing at the Master level and Ordained Minister with the Universal Life Church.
        </p>
      </section>
    </div>
  )
}