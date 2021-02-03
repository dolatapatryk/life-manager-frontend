import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeNode } from './tree-node';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
    selector: 'app-sidebar-tree',
    templateUrl: './sidebar-tree.component.html',
    styleUrls: ['./sidebar-tree.component.scss']
})
export class SidebarTreeComponent {

    @Input() set data(data: TreeNode[]) {
        this.dataSource.data = data;
    }

    dataSource = new MatTreeNestedDataSource<TreeNode>();
    treeControl = new NestedTreeControl<TreeNode>(node => node.children);
    hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
}
