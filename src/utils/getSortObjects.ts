import { SortParamsEnum } from '../enums';

const normalizeTitle = (str: string) => {
    const capitalizeFirstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizeFirstLetter.split('_').join(' ');
};

export function getSortObj(sortByParams: SortParamsEnum[]) {
    const sortTypes = [];
    for (const param of sortByParams) {
        sortTypes.push({
            title: `${normalizeTitle(param)} ↑`, param: param.concat('.asc'),
        });
        sortTypes.push({
            title: `${normalizeTitle(param)} ↓`, param: param.concat('.desc'),
        });
    }

    return sortTypes;
}
