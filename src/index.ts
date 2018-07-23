export class Optional<T> {
    private _valid: boolean;
    private validChecked: boolean;
    private _value: T;

    constructor(value?: T) {
        if (value != undefined) {
            this._valid = true;
            this._value = value;
        } else {
            this._valid = false;
            this._value = undefined;
        }
        this.validChecked = false;
    }

    /**
     * Property to check if the value given at construction is valid.
     *
     * @returns `true` if the value given at construction is non-null/non-undefined.
     */
    public get isValid(): boolean {
        this.validChecked = true;

        return this._valid;
    }

    /**
     * Returns the value stored at construction.
     *
     * @throws If the `isValid` property is not checked before the value is accessed.
     * @returns Value stored at construction
     */
    public get value(): T {
        if (!this.validChecked) {
            throw new Error('Optional value not checked for validity');
        }

        return this._value;
    }
}
