export const fields = {
  caseValue: {
    type: "text",
    placeholder: "Введите дело",
    name: "caseValue",
  },
  priority: {
    name: "priority",
    options: [
      {
        value: "normal",
        text: "Обычная",
      },
      {
        value: "high",
        text: "Срочно",
      },
      {
        value: "immediatly",
        text: "Немедленно!",
      },
    ],
  },
  isDone: {
    type: "checkbox",
    name: "isDone",
    checked: false,
  },
};
