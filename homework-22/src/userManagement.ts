//Задание 3

namespace UserManagement{

    export namespace Admin{

        export class AdminUser{
           private name: string;
           private email: string;
            private isSuperAdmin: boolean;

            constructor (name: string, email: string, isSuperAdmin: boolean){
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }


            setName(newName: string){
                this.name = newName
            }

            setEmail(newEmail: string){
                this.email = newEmail
            }

            setSuperAdminStatus(status:boolean){
                this.isSuperAdmin = status
            }

            getUserInfo(){
                return{
                    name: this.name,
                    email: this.email,
                    isSuperAdmin: this.isSuperAdmin,

                }
            }

        }
    }
}