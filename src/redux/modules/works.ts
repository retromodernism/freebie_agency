import { InferActionsTypes, BaseThunkType } from "./../store";
import { Dispatch } from "redux";
import photography from "./../../components/latestWorks/src/photography.png";
import kittens from "./../../components/latestWorks/src/kittens.png";
import mac from "./../../components/latestWorks/src/mac.png";
import apples from "./../../components/latestWorks/src/apples.png";

const moduleName = "works";

const REFRESH_WORKS = `${moduleName}/REFRESH_WORKS`;
const SET_WORK_CATEGORIES = `${moduleName}/SET_WORK_CATEGORIES`;

const initialState = {
  works: [] as WorkType[],
  categories: [] as CategoryType[],
};

// action creators
const actions = {
  getWorks: (works: WorkType[]) => ({
    type: REFRESH_WORKS,
    payload: [...works],
  }),
  setCategories: (categories: CategoryType[]) => ({
    type: SET_WORK_CATEGORIES,
    payload: [...categories],
  }),
};

const reducer = (state = initialState, { type, payload }: ActionsTypes) => {
  switch (type) {
    case REFRESH_WORKS:
      return {
        ...state,
        works: [...payload] as WorkType[],
      };
    case SET_WORK_CATEGORIES:
      return {
        ...state,
        categories: [...payload] as CategoryType[],
      };
    default:
      return state;
  }
};

export default reducer;

export const getWorks = (): ThunkType => async (dispatch: Dispatch) => {
  /**
   * Имитация получения ответа с сервера
   */

  await new Promise((res) => setTimeout(res, 1000));

  const works: WorkType[] = [
    {
      category: "Photography",
      isActive: true,
      image: photography,
      title: "100 Years Photography",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      readMore: false,
    },
    {
      category: "Branding",
      isActive: false,
      image: kittens,
      title: "A Kittens’s<br>Life",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      readMore: true,
    },
    {
      category: "Web Design",
      isActive: true,
      image: mac,
      title: "Groovemade Products For Mac",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      readMore: false,
    },
    {
      category: "Illustration",
      isActive: true,
      image: apples,
      title: "Apple's Lost Magic",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      readMore: false,
    },
    {
      category: "Web Design",
      isActive: true,
      image: photography,
      title: "100 Years Photography",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      readMore: false,
    },
  ];

  // Массив уникальных категорий
  const uniqCategories = [
    ...Array.from(new Set(works.map(({ category }) => category))),
  ];

  // Массив объектов для вывода в View
  const categories: CategoryType[] = uniqCategories.map((category) => ({
    category,
    isPicked: false,
    works: works.filter((work) => category === work.category),
  }));

  // Добавление категории All
  categories.unshift({
    category: "all",
    isPicked: true,
    works: works,
  });

  dispatch(actions.getWorks(works));
  dispatch(actions.setCategories(categories));
};

export type CategoryType = {
  category: string;
  isPicked: boolean;
  works: WorkType[];
};
export type WorkType = {
  category: string;
  isActive: boolean;
  image: string;
  title: string;
  description: {
    title: string;
    text: string;
  };
  readMore: boolean;
};
export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
