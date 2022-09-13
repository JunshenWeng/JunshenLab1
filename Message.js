


module.exports = (coursename,desc) =>
{
    this.coursename = coursename;
    this.desc = desc;
    this.detail = () => {
        return this.coursename + " " + this.desc;
    };
};