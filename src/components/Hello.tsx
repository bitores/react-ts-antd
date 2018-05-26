import * as React from "react";
import { Button } from 'antd';

export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <Button type="primary">{this.props.compiler} and {this.props.framework}!</Button>;
    }
}