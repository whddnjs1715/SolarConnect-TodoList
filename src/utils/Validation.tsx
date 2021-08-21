export const todoValidation = (text: String) => {
    if (text.length < 1) {
        return {
          result: false,
          message: '1자 이상 입력하세요!',
        };
      }

    if (text.length > 100) {
        return {
          result: false,
          message: '100자 이내로 입력해주세요!',
        };
      }

    return {
        result: true,
        message: '',
    };
};