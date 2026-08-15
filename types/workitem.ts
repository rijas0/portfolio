export default interface WorkItem {
  id: string | number;
  count: string | number;
  title: string;
  tagline: string;
  overview: string;
  role: string;
  duration: string;
  category: string;
  platform: string;
  mainImgLink: string;
  logo:string;
  websiteLink: string;
  androidLink: string;
  iosLink: string;
  techStack: TechStack[];
  keyFeatures: KeyFeature[];
  contributions: Contribution[];
  images: ImageGallery[];
}

export interface TechStack {
  title: string;
  svgUrl: string;
  imageUrl?: string;
}

export interface KeyFeature {
  feature: string;
}

export interface Contribution {
  title: string;
}

export interface ImageGallery {
  imageUrl: string;
}
