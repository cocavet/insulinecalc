import { plot, Plot } from 'nodeplotlib';

export function plotData(x: number[], y: number[]) {
    const data: Plot[] = [{ x, y }];
    
    plot(data);
}
