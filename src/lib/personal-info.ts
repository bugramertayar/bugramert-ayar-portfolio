import personalInfo from '../content/personal-info.json';

interface SharedInfo {
  name: string;
  title: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

interface HomePage {
  description: string;
  profileImage: string;
  callToAction: string;
}

interface AboutPage {
  headline: string;
  summary: string;
  coreCompetencies: {
    title: string;
    description: string;
  }[];
  experiences: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  skills: string[];
}

interface ContactPage {
  headline: string;
  description: string;
  form: {
    submitButtonText: string;
    fields: {
      name: {
        label: string;
        type: string;
      };
      email: {
        label: string;
        type: string;
      };
      message: {
        label: string;
        type: string;
        rows: number;
      };
    };
  };
  connect: {
    title: string;
  };
}

export interface PersonalInfo {
  shared: SharedInfo;
  pages: {
    home: HomePage;
    about: AboutPage;
    contact: ContactPage;
  };
}

export function getPersonalInfo(): PersonalInfo {
  return personalInfo;
}
