interface Course {
  school: string
  course: string
  url: string
  credits: string
  date: string
}

interface Degree {
  preface: string
  courses: Course[]
}

export type Courses = Degree[]

export const courses: Courses = [
  {
    preface:
      "Kaikki kurssit on suoritettu <a href='https://amkoodari.fi/'>AMKoodarin</a> kautta. Selvitän mahdollisuutta yhdistää eri opinnot " +
      "yhdeksi kokonaisuudeksi." +
      "<br />" +
      "Tarkoitus on myös jatkaa omaehtoista opiskelua syksyllä 2021. " +
      "Aina kun <a href='https://code.visualstudio.com/'>VSCode</a> on auki tulee myös muuten jotain uutta opittua.",
    courses: [
      {
        school: "XAMK",
        course: "PHP Programming",
        url: "https://cv.helppoelama.net/docs/xamk.pdf",
        credits: "5 op",
        date: "09.12.2020"
      },
      {
        school: "XAMK",
        course: "Python programming and data processing",
        url: "https://cv.helppoelama.net/docs/xamk.pdf",
        credits: "5 op",
        date: "08.12.2020"
      },
      {
        school: "Metropolia",
        course: "ASP.NET CORE Application development",
        url: "https://github.com/Nastradoomus/ASP.Net-Core",
        credits: "5 cr",
        date: "09.11.2020"
      },
      {
        school: "Metropolia",
        course: "Cloud Computing Services and Microsoft Azure Fundamentals",
        url: "https://techclass.io/certificate/GGVK702G",
        credits: "8 cr",
        date: "24.12.2020"
      },
      {
        school: "Metropolia",
        course: "MongoDB",
        url: "https://github.com/Nastradoomus/amkoodari-mongodb",
        credits: "5 cr",
        date: "06.10.2020"
      },
      {
        school: "Metropolia",
        course: "React.js",
        url: "https://github.com/Nastradoomus/amkoodari-react",
        credits: "15 cr",
        date: "20.10.2020"
      },
      {
        school: "Metropolia",
        course: "Responsive Web Applications with Bootstrap and CSS",
        url: "https://techclass.io/certificate/GHG8VACG",
        credits: "8 cr",
        date: "23.04.2020"
      },
      {
        school: "Metropolia",
        course: "Software Testing and Quality Assurance",
        url: "https://techclass.io/certificate/WR90JCKY",
        credits: "5 cr",
        date: "23.04.2021"
      },
      {
        school: "Metropolia",
        course: "Typescript",
        url: "https://github.com/Nastradoomus/TypeScript",
        credits: "5 cr",
        date: "23.09.2020"
      },
      {
        school: "Metropolia",
        course: "Version Control with Git",
        url: "https://github.com/Nastradoomus/MasteringGit",
        credits: "6 cr",
        date: "22.09.2020"
      }
    ]
  }
]
