import { Launch } from '../types/types';

export const normaliseData = (launchData: any, rocketData: any): Launch[] => {
  console.log('inside function', launchData);

  return [...launchData].map((item: any) => {
    console.log(item);
    const typedItem = {} as Launch;
    const rocket = [...rocketData].find(
      (rocket: any) => rocket.id === item.rocket
    );
    typedItem.id = item.id;
    typedItem.name = item.name;
    typedItem.date_utc = item.date_utc;
    typedItem.rocket = rocket ? rocket.name : 'n/a';
    return typedItem as Launch;
  });
};
