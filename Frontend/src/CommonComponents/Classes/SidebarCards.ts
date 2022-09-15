class SidebarCards {
    title: string;
    linkTitles: string[];
    linkPaths: string [];

    constructor(title: string, linkTitles: string[]) {
        this.title = title;
        this.linkTitles = linkTitles;
        this.linkPaths = [];
    }

    generatePaths() {
        for (let i = 0; i < this.linkTitles.length; i++) {
            if (this.linkTitles[i] === 'Feed' || this.linkTitles[i] === 'My Recipes') {
              this.linkPaths.push(this.linkTitles[i]);
              continue;
            } else {
              this.linkPaths.push('/' + this.linkTitles[i].replace(/\s/g, '').toLowerCase())
            }
        }
    }
}

export default SidebarCards;