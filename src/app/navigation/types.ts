import type { ComponentType } from "react";

export type Lesson = {
  id: string;
  title: string;
  component: ComponentType;
};

export type Section = {
  id: string;
  title: string;
  lessons: Lesson[];
};


