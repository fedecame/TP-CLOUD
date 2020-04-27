class Artist {
    constructor(anID, aName, aCountry){
        this._id        = anID;
        this._name      = aName;
        this._country   = aCountry;
        this._albums    = [];
      }
      
      get id(){return this._id};
      get name(){return this._name};
      get country(){return this._country};
      get albums(){return this._albums};
      set albums(aList){return this._albums = aList};
}

module.exports = Artist;