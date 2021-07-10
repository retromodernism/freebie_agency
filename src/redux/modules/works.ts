import { InferActionsTypes, BaseThunkType, AppStateType } from "./../store";
import { Dispatch } from "redux";
import photography from "./../../components/latestWorks/src/photography.png";
import kittens from "./../../components/latestWorks/src/kittens.png";
import mac from "./../../components/latestWorks/src/mac.png";
import apples from "./../../components/latestWorks/src/apples.png";

const moduleName = "works";

const REFRESH_WORKS = `${moduleName}/REFRESH_WORKS`;
const SET_WORK_CATEGORIES = `${moduleName}/SET_WORK_CATEGORIES`;

const worksDisplayed = 4;
const numberOfAddedWorks = 3;

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
      showMore: false,
      isShowed: false,
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
      showMore: true,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
    },
    {
      category: "Photography",
      isActive: true,
      image: photography,
      title: "100 Years Photography",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      showMore: false,
      isShowed: false,
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
      showMore: true,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
    },
    {
      category: "Photography",
      isActive: true,
      image: photography,
      title: "100 Years Photography",
      description: {
        title: "Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      showMore: false,
      isShowed: false,
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
      showMore: true,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
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
      showMore: false,
      isShowed: false,
    },
  ];

  // Массив уникальных категорий
  const uniqCategories = [
    ...Array.from(new Set(works.map(({ category }) => category))),
  ];

  // Массив объектов для вывода в View
  let categories: CategoryType[] = uniqCategories.map((category) => ({
    category,
    isPicked: false,
    hasShowMore: false,
    works: works.filter((work) => category === work.category),
  }));

  // Добавление категории All
  categories.unshift({
    category: "all",
    isPicked: true,
    works: works,
    hasShowMore: false,
  });

  categories = categories.map((category) => {
    const hasShowMore = category.works.length > worksDisplayed;
    const works = category.works.map((work, i) =>
      i < worksDisplayed
        ? {
            ...work,
            isShowed: true,
          }
        : work
    );
    return {
      ...category,
      works,
      hasShowMore,
    };
  });

  dispatch(actions.getWorks(works));
  dispatch(actions.setCategories(categories));
};

export const toggleCategory =
  (category: string): ThunkType =>
  async (dispatch: Dispatch, getState: () => AppStateType) => {
    const categories = getState().works.categories;
    dispatch(
      actions.setCategories(
        categories.map((curCategory) => ({
          ...curCategory,
          isPicked: curCategory.category === category,
        }))
      )
    );
  };

export const showMore =
  (category: string): ThunkType =>
  async (dispatch: Dispatch, getState: () => AppStateType) => {
    const categories = getState().works.categories;
    const countOfAllWorks = categories.filter(({ isPicked }) => isPicked)[0]
      .works.length;
    const numberOfDisplayedCategories = categories
      .filter(({ isPicked }) => isPicked)[0]
      .works.filter(({ isShowed }) => isShowed).length;

    const showMore =
      countOfAllWorks > numberOfDisplayedCategories + numberOfAddedWorks;

    const newCategories = categories.map((curCategory) => {
      const { isPicked } = curCategory;

      if (!isPicked) {
        return curCategory;
      }

      return {
        ...curCategory,
        hasShowMore: showMore,
        works: curCategory.works.map((work, index) =>
          index < numberOfDisplayedCategories + numberOfAddedWorks
            ? { ...work, isShowed: true }
            : { ...work, isShowed: false }
        ),
      };
    });

    dispatch(actions.setCategories(newCategories));
  };

export type CategoryType = {
  category: string;
  isPicked: boolean;
  hasShowMore: boolean;
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
  showMore: boolean;
  isShowed: boolean;
};
export type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;
