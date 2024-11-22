export const transformCreatedDate = (timestamp: number) => {
    const createdDate = new Date(timestamp);
    const todayDate = new Date();
    const years = createdDate.getFullYear();
    const monthes = (createdDate.getMonth() + 1).toString().padStart(2, '0');
    const days = createdDate.getDate().toString().padStart(2, '0');
    const hours = createdDate.getHours().toString().padStart(2, '0');
    const minutes = createdDate.getMinutes().toString().padStart(2, '0');

    if (isToday(createdDate, todayDate)) {
        return `Сегодня в ${hours}:${minutes}`;
    }

    if (isYesterday(createdDate, todayDate)) {
        return `Вчера в ${hours}:${minutes}`;
    }

    const countOfmonthsAgo = monthsAgo(createdDate, todayDate);

    if (countOfmonthsAgo > 12) {
        return 'Больше 1 года назад';
    }

    if (countOfmonthsAgo > 6) {
        return 'Около 1 года назад';
    }

    if (countOfmonthsAgo > 0) {
        return `${countOfmonthsAgo} месяцев назад`;
    }

    return `${days}.${monthes}.${years}`;
};

const isToday = (createdDate: Date, todayDate: Date) =>
    createdDate.getFullYear() === todayDate.getFullYear() &&
    createdDate.getMonth() === todayDate.getMonth() &&
    createdDate.getDate() === todayDate.getDate();

const isYesterday = (createdDate: Date, todayDate: Date) => {
    const createdDateStart = new Date(createdDate);
    const todayDateStart = new Date(todayDate);

    createdDateStart.setHours(0, 0, 0, 0);
    todayDateStart.setHours(0, 0, 0, 0);

    const yesterdayDate = new Date(todayDateStart);
    yesterdayDate.setDate(todayDateStart.getDate() - 1);

    return createdDateStart.getTime() === yesterdayDate.getTime();
};

const monthsAgo = (createdDate: Date, todayDate: Date) => {
    let yearsDiff = todayDate.getFullYear() - createdDate.getFullYear();
    let monthsDiff = todayDate.getMonth() - createdDate.getMonth();

    if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
    }

    const totalMonths = yearsDiff * 12 + monthsDiff;

    return totalMonths;
};
